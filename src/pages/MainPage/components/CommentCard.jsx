import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, ButtonGroup, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { ThumbDown, ThumbUp } from '@mui/icons-material'

export const CommentCard = ({ cardData }) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={cardData.avatar} />
                }
                title={cardData.name}
                subheader={cardData.date}
                action={
                    <ButtonGroup>
                        <IconButton disabled>
                            <ThumbUp />
                        </IconButton>

                        <IconButton disabled>
                            <ThumbDown />
                        </IconButton>
                    </ButtonGroup>
                }
            />

            <CardContent>
                <Typography
                    variant='body2'
                    color='black'
                >
                    {cardData.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

CommentCard.propTypes = {
    cardData: PropTypes.object,
}