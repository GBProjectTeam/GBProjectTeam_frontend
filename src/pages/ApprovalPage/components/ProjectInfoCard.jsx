import React from 'react'
import PropTypes from 'prop-types'
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    Stack
} from '@mui/material'
import { getValue } from '../utils/getValue.js'
import { getColor } from '../utils/getColor.js'
import { EditProjectStatus } from './EditProjectStatus.jsx'
import { EditUserDecision } from './EditUserDecision.jsx'
import { useSelector } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice.js'
import { format } from 'date-fns'
import { getSolution } from '../../ProjectsPage/utils/getSolution.js'

export const ProjectInfoCard = ({ project }) => {
    const { userId } = useSelector(loginSelector)

    const isOwner = project?.ownerId._id === userId

    const renderAttribute = (attribute, value, agreedTitle, notAgreedTitle, isColored) => {
        return (
            <Stack direction='row'>
                <Typography
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    {attribute}:&nbsp;
                </Typography>

                <Typography
                    fontWeight='fontWeightBold'
                    color={isColored ? getColor(value) : 'none'}
                >
                    {getValue(value, agreedTitle, notAgreedTitle)}
                </Typography>
            </Stack>
        )
    }

    const deadlineStatus = project?.deadline ? format(new Date(project?.deadline), 'dd.MM.yyyy') : null
    return (
        <Card sx={{ width: '25%' }}>
            <CardHeader title='Информация о проекте' />

            <CardContent>
                {renderAttribute('Автор проекта', `${project?.ownerId.lastName} ${project?.ownerId.firstName}`)}

                {!isOwner && renderAttribute(
                    'Решение',
                    getSolution(project?.coordinationUsers || [], userId),
                    'Согласовано',
                    'Отклонено',
                    true
                )}
                {renderAttribute(
                    'Дедлайн',
                    deadlineStatus
                )}

                {renderAttribute(
                    'Статус проекта',
                    project?.status,
                    'На согласовании',
                    'Закрыт',
                    true
                )}
            </CardContent>

            <CardActions >
                <Stack
                    spacing={1}
                    alignItems='center'
                    flex={1}
                >
                    {!isOwner && project?.status !== 'Заморожено' && <EditUserDecision />}
                    {isOwner && <EditProjectStatus />}
                </Stack>
            </CardActions>
        </Card>
    )
}

ProjectInfoCard.propTypes = {
    project: PropTypes.object
}