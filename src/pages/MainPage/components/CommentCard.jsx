import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, ButtonGroup, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { ThumbDown, ThumbUp } from '@mui/icons-material'

export const CommentCard = ({ cardData }) => {
    return (
        <Card sx={{ marginTop: '20px' }}>
            <CardHeader
                sx={{ padding: '15px 15px 5px' }}
                avatar={
                    <Avatar src={cardData.avatar} />
                }
                title={cardData.name}
                subheader={cardData.date}
                action={
                    <ButtonGroup>
                        <IconButton>
                            <ThumbUp />
                        </IconButton>
                        <IconButton>
                            <ThumbDown />
                        </IconButton>
                    </ButtonGroup>
                }
            />
            <CardContent sx={{ padding: '5px 15px 10px !important' }}>
                <Typography variant='body2' color='000'>
                    {cardData.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

CommentCard.propTypes = {
    cardData: PropTypes.object,
}