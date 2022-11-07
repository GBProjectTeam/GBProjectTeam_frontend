import React from 'react'
import {
    Button,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    TextField,
    Typography
} from '@mui/material'
import { Add, ArticleOutlined, Clear, EditOutlined, FileDownloadOutlined } from '@mui/icons-material'
import { useCreateDocumentMutation } from '../../../store/api'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDocFromProject, newProjectPageSelector } from '../newProjectPageSlice'
import { Modal, ProgressOverlay } from '../../../common'

export const DocsNewProject = () => {
    const [ file, setFile ] = React.useState()
    const [ fileName, setFileName ] = React.useState('')
    const [showDeleteDocModal, setShowDeleteDocModal] = React.useState(false)

    const { dataForCreateNewProject, projectDocs } = useSelector(newProjectPageSelector)

    const [ createDocument, { isLoading } ] = useCreateDocumentMutation()

    const setFileAndFileName = (file) => {
        setFile(file)
        setFileName(file.name.replace(/\.[^/.]+$/, ''))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const documentData = new FormData()
        documentData.append('projectId', dataForCreateNewProject.projectId)
        documentData.append('attachedFileName', fileName)
        documentData.append('file', file)

        createDocument(documentData)

        setFile(undefined)
        setFileName('')
    }

    const dispatch = useDispatch()

    const deleteDoc = (id) => {
        setShowDeleteDocModal(false)

        dispatch (
            deleteDocFromProject(id)
        )
    }

    return (
        <Stack
            width='100%'
            spacing={3}
        >
            <Stack
                spacing={3}
                alignItems='center'
                component='form'
                onSubmit={onSubmit}
                method='POST'
            >
                <Stack
                    direction='row'
                    justifyContent='start'
                    alignItems='center'
                    width='100%'
                    my={0.5}
                    spacing={3}
                >
                    <IconButton
                        component='label'
                        size='large'
                    >
                        <FileDownloadOutlined />

                        <input
                            hidden
                            accept='.doc, .docs, .pdf'
                            multiple
                            type='file'
                            onChange={(e) => setFileAndFileName(e.target.files[0])}
                        />
                    </IconButton>

                    <Typography>{ file?.name || 'Имя документа' }</Typography>
                </Stack>

                <TextField
                    variant='outlined'
                    fullWidth
                    label='Название документа'
                    value={fileName}
                    onChange={
                        (e) => setFileName(e.target.value)
                    }
                />

                <Button
                    type='submit'
                    variant='outlined'
                    disabled={!fileName || !file}
                    startIcon={<Add />}
                    sx={{ borderRadius: '20px' }}
                >
                    добавить документ
                </Button>
            </Stack>

            <List>
                {projectDocs.map((item) =>
                    <ListItem
                        key={item.id}
                        sx={{ my: 2.5 }}
                        secondaryAction={
                            <div>
                                <IconButton>
                                    <EditOutlined />
                                </IconButton>
                                <IconButton>
                                    <Modal
                                        button='icon'
                                        isOpen={showDeleteDocModal}
                                        isOutlintedVariant
                                        showCheck
                                        allowSubmit
                                        error
                                        onSubmit={() => deleteDoc(item.id)}
                                        onOpen={() => setShowDeleteDocModal(true)}
                                        onClose={() => setShowDeleteDocModal(false)}
                                        icon={<Clear />}
                                        label='Удалить документ'
                                        title='Удаление документ'
                                        del
                                    >
                                        Вы уверены, что хотите удалить документ:
                                        <Typography>
                                            {item.name}
                                        </Typography>
                                    </Modal>
                                </IconButton>
                            </div>

                        }
                    >
                        <ListItemAvatar sx={{ display: 'flex' }}>
                            <ArticleOutlined />
                        </ListItemAvatar>

                        <ListItemText primary={item.name} />
                    </ListItem>
                )}
            </List>

            {isLoading && (
                <ProgressOverlay showProgressOverlay={isLoading} />
            )}
        </Stack>
    )
}
