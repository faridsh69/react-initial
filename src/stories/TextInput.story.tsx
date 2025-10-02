import { useState } from 'react'
import { TextInput } from 'components/TextInput/TextInput'
import { IconsEnum, VariantsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const TextInputStory = () => {
  const [value, setValue] = useState('Value')

  const onChange = (e: any) => setValue(e.target.value)

  // const props: TextInputProps = {
  //   withHandle: false,
  //   wrapperClassName: 'string',
  //   iconColor: ColorsEnum.Blue,
  //   defaultValue: 'Default ',
  //   avatar: 'https://dh5od79hpom3m.cloudfront.net/avatars/avatarCat.png',
  //   active: false,
  //   readOnly: false,
  //   copyable: false,
  // }

  return (
    <div className={styles.story}>
      <h4>6) TextInput</h4>
      <small>
        We have 2 main variants here: primary and secondary. also we support hasError, unit, icon,
        clearable, and hideable
      </small>
      <code>
        {
          '<TextInput label="label" value onChange variant={VariantsEnum.Primary} clearable unit="$" />'
        }
      </code>
      <TextInput label='Primary' placeholder='Primary' variant={VariantsEnum.Primary} width={300} />

      <TextInput label='With unit' variant={VariantsEnum.Primary} unit={'$'} width={300} />
      <TextInput
        label='With Icon'
        variant={VariantsEnum.Primary}
        icon={IconsEnum.View}
        width={300}
      />

      <TextInput width={300} label='clearable' clearable value={value} onChange={onChange} />
      <TextInput width={300} label='hideable' hideable />
      <TextInput
        label='Secondary'
        placeholder='Secondary'
        icon={IconsEnum.View}
        variant={VariantsEnum.Secondary}
        width={300}
        clearable
        value={value}
        onChange={onChange}
      />
      <TextInput hasError width={300} label='hasError' errorText='Wrong password' />
      <TextInput disabled width={300} label='disabled' />
      <TextInput placeholder='With placeholder' width={300} />

      <div style={{ display: 'flex', gap: 10 }}>
        <TextInput width={35} defaultValue={1} />
        <TextInput width={35} defaultValue={2} />
        <TextInput width={35} defaultValue={3} />
        <TextInput width={35} defaultValue={4} />
      </div>
    </div>
  )
}
