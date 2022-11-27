import { ProjectActions } from '../../ProjectsPage/components/ProjectActions.jsx'

export const columns = [
    {
        field: 'name',
        headerName: 'Проект',
        headerAlign: 'left',
        align: 'left',
        flex: 1,
        sortable: false
    },
    {
        field: 'closedAt',
        headerName: 'Дата закрытия',
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