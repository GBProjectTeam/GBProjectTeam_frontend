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

export const ProjectInfoCard = ({ information }) => {
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

    return (
        <Card sx={{ width: '25%' }}>
            <CardHeader title='Информация о проекте' />

            <CardContent>
                {renderAttribute('Автор проекта', `${information?.ownerId.lastName} ${information?.ownerId.firstName}`)}

                {renderAttribute(
                    'Решение',
                    projectInfo.userDecisionIsAgreed,
                    'Согласовано',
                    'Отклонено',
                    true
                )}
                {renderAttribute(
                    'Дедлайн',
                    information?.deadline
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
                    <EditUserDecision />
                    <EditProjectStatus />
                </Stack>
            </CardActions>
        </Card>
    )
}

ProjectInfoCard.propTypes = {
    information: PropTypes.object
}