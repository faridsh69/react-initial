import { FileUploader } from 'components/FileUploader/FileUploader'

import styles from './Story.module.scss'

export const FileUploaderStory = () => {
  return (
    <div className={styles.story}>
      <h4>21) FileUploader</h4>

      <small>We have a file uploader with showing uploaded files</small>
      <code>{'<FileUploader label="Add photo" />'}</code>

      <div style={{ gap: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <FileUploader label='Add photo' max={2} value={[]} onChange={() => {}} />
      </div>
    </div>
  )
}
