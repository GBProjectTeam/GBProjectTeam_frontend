import React from 'react'
import PropTypes from 'prop-types'
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
import { Add, ArticleOutlined, Clear, FileDownloadOutlined } from '@mui/icons-material'
import { useCreateDocumentMutation } from '../../../store/api'
import { useDispatch, useSelector } from 'react-redux'
import { addDocsFromProject, deleteDocFromProject, newProjectSelector } from '../newProjectSlice'
import { DeleteModal, ProgressOverlay } from '../../../common'

export const DocsNewProject = ({
    updatedDocumentsIds,
    isUpdate = false,
}) => {
    const [ file, setFile ] = React.useState()
    const [ fileName, setFileName ] = React.useState('')

    const { project, projectDocs } = useSelector(newProjectSelector)

    const [ createDocument, { isLoading } ] = useCreateDocumentMutation()

    const dispatch = useDispatch()

    const updatingDocs = React.useMemo(
        () => {
            if (isUpdate) {
                return updatedDocumentsIds?.map(
                    (doc) => ({
                        _id: doc._id,
                        name: doc.attachedFileName,
                    })
                )
            }
        },
        [updatedDocumentsIds],
    )

    React.useEffect(
        () => {
            if (isUpdate && updatingDocs.length !== 0) {
                dispatch(
                    addDocsFromProject(updatingDocs)
                )
            }
        },
        [updatingDocs],
    )

    const setFileAndFileName = (newFile) => {
        setFile(newFile)
        setFileName(newFile.name.replace(/\.[^/.]+$/, ''))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const documentData = new FormData()
        documentData.append('projectId', project.projectId)
        documentData.append('attachedFileName', fileName)
        documentData.append('file', file)

        createDocument(documentData)

        setFile(undefined)
        setFileName('')
    }

    const deleteDoc = (id) => {
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
                            accept='.pdf'
                            multiple
                            type='file'
                            onChange={(e) => setFileAndFileName(e.target.files[0])}
                        />
                    </IconButton>

                    <Typography>{ file?.name || '?????????????????? ????????????????' }</Typography>
                </Stack>

                <TextField
                    variant='outlined'
                    fullWidth
                    label='???????????????? ??????????????????'
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
                    ???????????????? ????????????????
                </Button>
            </Stack>

            <List>
                {projectDocs.map((item) => (
                    <ListItem
                        key={item._id}
                        sx={{ my: 2.5 }}
                        secondaryAction={
                            <DeleteModal
                                onSubmit={() => deleteDoc(item._id)}
                                message='???? ??????????????, ?????? ???????????? ?????????????? ????????????????'
                                itemName={item.name}
                                title='???????????????? ??????????????????'
                                button='icon'
                                icon={<Clear />}
                            />
                        }
                    >
                        <ListItemAvatar sx={{ display: 'flex' }}>
                            <ArticleOutlined />
                        </ListItemAvatar>

                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>

            {isLoading && (
                <ProgressOverlay showProgressOverlay={isLoading} />
            )}
        </Stack>
    )
}

DocsNewProject.propTypes = {
    updatedDocumentsIds: PropTypes.array,
    isUpdate: PropTypes.bool,
}
