import React from 'react'
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    Stack
} from '@mui/material'
import { projectInfo } from '../constants/projectInfo.js'
import { getValue } from '../utils/getValue.js'
import { getColor } from '../utils/getColor.js'
import { EditProjectStatus } from './EditProjectStatus.jsx'
import { EditUserDecision } from './EditUserDecision.jsx'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { loginSelector } from '../../LoginPage/loginSlice.js'
import { format } from 'date-fns'

export const ProjectInfoCard = ({ information }) => {
    const { userId } = useSelector(loginSelector)
    const renderAttribute = (attribute, value, agreedTitle, notAgreedTitle, isColored) => (
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

    const deadlineStatus = information?.deadline ? format(new Date(information?.deadline), 'dd-MM-yyyy') : null
    return (
        <Card sx={{ width: '25%' }}>
            <CardHeader title='Информация о проекте' />

            <CardContent>
                {renderAttribute('Автор проекта', `${information?.ownerId.lastName} ${information?.ownerId.firstName}`)}

                {information?.ownerId._id !== userId && renderAttribute(
                    'Решение',
                    projectInfo.userDecisionIsAgreed,
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
                    information?.status,
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
                    {information?.ownerId._id !== userId && <EditUserDecision docs={information} />}
                    {information?.ownerId._id === userId && <EditProjectStatus />}
                </Stack>
            </CardActions>
        </Card>
    )
}

ProjectInfoCard.propTypes = {
    information: PropTypes.object
}