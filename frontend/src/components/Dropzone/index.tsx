import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setUploadedFileUrl(fileUrl);

    onFileUploaded(file);
  }, [onFileUploaded])
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {
        uploadedFileUrl
          ? <img src={uploadedFileUrl} alt="Ponto de Coleta" />
          :
          (
            <p>
              <FiUpload />
               Imagem do estabelecimento
            </p>
          )
      }


    </div>
  )
}

export default Dropzone;