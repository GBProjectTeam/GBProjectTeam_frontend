import { ProjectActions } from '../components/ProjectActions'

export const columns = [
    {
        field: 'project',
        headerName: 'Проект',
        headerAlign: 'left',
        align: 'left',
        flex: 3,
        sortable: false
    },
    {
        field: 'deadline',
        headerName: 'Дедлайн',
        headerAlign: 'left',
        align: 'left',
        flex: 1,
    },
    {
        field: 'author',
        headerName: 'Автор проекта',
        headerAlign: 'left',
        align: 'left',
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'Статус',
        headerAlign: 'left',
        align: 'left',
        flex: 1,
    },
    {
        field: 'solution',
        headerName: 'Решение',
        headerAlign: 'left',
        align: 'left',
        flex: 1,
    },
    {
        field: 'actions',
        headerName: 'Действия',
        headerAlign: 'right',
        align: 'right',
        flex: 1,
        sortable: false,
        disableColumnMenu: true,
        renderCell: ProjectActions
    }
]