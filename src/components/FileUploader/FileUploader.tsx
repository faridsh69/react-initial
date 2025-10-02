import { useRef, useState, type ChangeEvent } from 'react'
import { Button } from 'components/Button/Button'
import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { Icon } from 'components/Icon/Icon'
import { Image } from 'components/Image/Image'
import { toastError } from 'components/Toast/Toast'
import { ColorsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { getBase64Image } from 'helpers/helpers'
import { useCrudDiscourseRatingImages } from 'services/hooks/useCrudDiscourse'

import { FileUploaderProps } from './FileUploader.types'
import styles from './FileUploader.module.scss'

export const FileUploader = (props: FileUploaderProps) => {
  const { label = 'Add file', max = 3, value = [], onChange } = props

  const [imageUrls, setImageUrls] = useState<string[]>(value)

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleClickOnFileInput = () => {
    fileInputRef.current?.click()
  }

  const { createMutation: uploadImageMutation } = useCrudDiscourseRatingImages()
  const handleSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const base64 = await getBase64Image(file)

    uploadImageMutation.mutate({
      data: { images: [base64] },
      onSuccess: apiResponse => {
        if (!apiResponse?.data?.[0]) {
          toastError({
            description: 'Image upload failed',
          })
          return
        }
        const newUploadImageUrls = [...imageUrls, apiResponse.data[0]]

        setImageUrls(newUploadImageUrls)
        onChange(newUploadImageUrls)
      },
    })
  }

  const handleRemoveFile = (src: string) => {
    const newUploadImageUrls = imageUrls.filter(url => url !== src)

    setImageUrls(newUploadImageUrls)
    onChange(newUploadImageUrls)
    // We should handle deleting image api here
  }

  return (
    <div className={styles.fileUploader}>
      <div className={styles.uploadedFiles}>
        {imageUrls?.length === 0 && <DataNotFound label='No files uploaded yet.' />}
        {imageUrls?.map(src => {
          return (
            <div key={src} className={styles.uploadedFile}>
              <Image src={src} alt='Avatar' width={110} height={140} />
              <div onClick={() => handleRemoveFile(src)} className={styles.removeFile}>
                <Icon icon={IconsEnum.CloseMedium} color={ColorsEnum.Black} size={SizesEnum.S} />
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.inputWrapper}>
        <Button
          label={label}
          disabled={imageUrls?.length >= max}
          onClick={handleClickOnFileInput}
          iconLeft={IconsEnum.Plus}
          size={SizesEnum.S}
          variant={VariantsEnum.Secondary}
        />
        <input
          type='file'
          accept='image/*'
          ref={e => {
            fileInputRef.current = e
          }}
          onChange={handleSelectFile}
        />
      </div>
    </div>
  )
}
