This project was bootstrapped with [Vite](https://vitejs.dev/).
# **GBProjectTeam_frontend**

`yarn dev` запустить приложение в режиме разработки

`yarn` установить зависимости<br/>
`yarn add [package]` установить пакет<br/>
`yarn remove [package]` удалить пакет<br/>

> Не забываем включить ESLint!

### Порядок разработки
- каждая задача/фича разрарабатывается в новой ветке 
(примеры имён веток: create-_new_-page, fix-_something_-on-_some_-page, edit-_something_-on-_some_-page)
- создаем pull request с веткой, где велась разработка и с кратким описанием задачи (можно ссылкой на трелло/миро etc)
- код-ревью и мердж

### Стилизация
- максимально используем возможности [mui](https://mui.com/material-ui/getting-started/overview/).
- в исключительных случаях для описания стилей используем препроцессор [sass](https://sass-lang.com/).

### Стейт-менеджмент
Не допускаем props-hell, используем [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) и для запросов на сервер [RTK Query](https://redux-toolkit.js.org/introduction/getting-started#rtk-query).

### Структура проекта
_common_ - обшие компоненты, например, header<br/>
_layouts_ - общие макеты старниц<br/>
_pages_ - страницы приложения<br/>
_store_ - для работы с redux<br/>
_utils_ - общие файлы, например, reset.sass<br/>
_dumbComponents_ - для простых элементов, например, кастомных кнопок<br/>

- Каждый компонент разрабатывается в отдельной одноименной папке, например, Header. Рядом с компонентом, если требуется, располагаем файл со стилями, например, header.sass.<br/>
- В каждой общей папке с компонентами располагаем index-файл, для дальнейшего удобного импорта.<br/>
- Предпочтительное использование именнованых импортов, например: <br/>
>import { Box, List } from '@mui/material'<br/>

Исключением может стать, например, React:
>import React from 'react'<br/>

Чтобы в дальнейшем можно было писать, например, так _React.useState()_, а не импортировать хук отдельно (используем функциональный подход к написанию компонентов).

### Коммиты
Каждый файл отдельным коммитом.<br/>
Коммит вида:
_имя файла: что изменилось_

