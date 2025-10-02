import { useState } from 'react'
import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { Modal } from 'components/Modal/Modal'
import { Select } from 'components/Select/Select'
import { TextInput } from 'components/TextInput/TextInput'
import { ColorsEnum, FontsEnum, TextAlignEnum, VariantsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ModalStory = () => {
  const [modal, setModal] = useState('')

  const props = {
    width: 450,
    setIsOpen: () => setModal(''),
    closeOnClickOutside: true,
  }
  return (
    <div className={styles.story}>
      <h4>8) Modal </h4>
      <small>We have modal with 2 sizes S and M, it has title, body and footer</small>
      <code>
        {
          '<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Modal Title" body={<div>Modal Body</div>} />'
        }
      </code>
      <Button onClick={() => setModal('Login')} label='Open Modal Login' />
      <Button onClick={() => setModal('Register')} label='Open Modal Register' />
      {/* <Button onClick={() => setModal('Rate')} label='Open Modal Rate' />
      <Button onClick={() => setModal('Share')} label='Open Modal Share' />
      <Button onClick={() => setModal('Save')} label='Open Modal Save to list' /> */}
      <Modal
        isOpen={modal === 'Login'}
        bodyPadding
        {...props}
        title='Login to your account'
        body={
          <div style={{ gap: 36, display: 'flex', flexDirection: 'column' }}>
            <Label
              font={FontsEnum.Text16}
              linesCount={3}
              textAlign='center'
              label='Get started by entering your email. '
            />
            <TextInput label='Email' type='email' placeholder='Email address' />
          </div>
        }
        actions={
          <div style={{ gap: 10, display: 'flex', flexDirection: 'column' }}>
            <Button label='Continue with Email' width={'100%'} />
            or
            <Button label='Continue with Gmail' variant={VariantsEnum.Secondary} width={'100%'} />
          </div>
        }
      />
      <Modal
        isOpen={modal === 'Register'}
        bodyPadding
        {...props}
        title='Create a new account'
        variant={VariantsEnum.Secondary}
        body={
          <div style={{ gap: 16, display: 'flex', flexDirection: 'column' }}>
            <Label
              font={FontsEnum.Text16}
              linesCount={3}
              textAlign='center'
              label='Welcome to UI kit!'
            />
            <Select
              multiple={false}
              label='Country'
              options={[{ label: 'United States', value: 'us' }]}
              value={'us'}
            />
            <TextInput label='Name' placeholder='Name' />
            <TextInput label='Date of birth' type='date' placeholder='Email address' />
            <TextInput
              label='Password'
              type='text'
              placeholder='Password'
              hideable
              hint='Password must be between 6-8 characters'
            />
          </div>
        }
        actions={
          <div
            style={{
              gap: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Button label='Create an account' width={'100%'} />
            <Label
              font={FontsEnum.Text12}
              label='By creating an account, you agree to the VinoVoss'
              textAlign={TextAlignEnum.Center}
              color={ColorsEnum.Grey600}
            />
            <Label
              font={FontsEnum.Text12}
              label=' Terms of Use, Privacy Policy & Content Policy'
              textAlign={TextAlignEnum.Center}
            />
          </div>
        }
      />
    </div>
  )
}
