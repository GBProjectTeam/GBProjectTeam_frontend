import { React, useState } from 'react';
import './ApprovalPage.css'
import { DocsAndEnd } from './docsAndEnd';



export const ApprovalPage = () => {
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    return (
        <div>
            <div className="mainBlock">
                <div className="">
                    <div className="projectName">
                        <p className="nameBlock">
                            Согласование проекта:
                            <p className='appName'>Контракт по закупке канцелярский товаров</p>
                        </p>
                        <DocsAndEnd />
                    </div>
                    <hr className='line'></hr>
                    <div className="informHead">
                        <div className="approvalInf">
                            <p className="textbord">
                                <p className="headText">Управляющий проектом:</p>
                                <span>Иванов Иван Иванович</span>
                            </p>

                            <p className="textbord">
                                <p className="headText">Статус:</p>
                                отклонено
                            </p>
                        </div>



                    </div>
                    <div className="tablebox">
                        <div className="listName">
                            <p>
                                Лист согласования
                            </p>
                        </div>
                        <table class="iksweb">
                            <tbody>
                                <tr className="tableHead">
                                    <td className='columnName'>Согласующий</td>
                                    <td className='columnName'>Решение</td>
                                    <td className='columnName'>Комментарий</td>

                                </tr>
                                <tr>
                                    <td>Петров Виктор Фёдорович</td>
                                    <td>
                                        <p className="disagree">
                                            Отклонено:
                                        </p>
                                        __.__.20__ , __.__.__
                                    </td>
                                    <td>ГК-2019-1:
                                        <p>П-5.3 - поменять количество с 4 на 7</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Колмагорская Инна Витальевна</td>
                                    <td>
                                        <p className="agree">
                                            Согласовано:
                                        </p>
                                        __.__.20__ , __.__.__
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Федорчук Петр Сергеевич</td>
                                    <td><p className="agree">
                                        Согласовано:
                                    </p>
                                        __.__.20__ , __.__.__</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div >

    )
}


