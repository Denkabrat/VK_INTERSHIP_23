import './Comments.scss';

const Comments = ({comm,setComm,clearForm,sendData}) => {


    const writeValue = (e) => {
        setComm(e.target.value);
        //функция по получению данных из формы и отправки в стейт
    };



    return(
        <div>
            <div className='Comments_Block'>
                <span className='comment_header'>Комментарий</span>
                <textarea onChange={(e) => writeValue(e)} value={comm} className='comments_area' name="Comments" id="1" cols="30" rows="10"></textarea>
            </div>

            <div className="form_btns">
                 <button onClick={()=> clearForm()} className='del_form'>Очистить форму</button>
                 <button onClick={()=> {sendData();clearForm()}} className='send_form'>Отправить</button>
            </div>
           
        </div>
    )

}

export default Comments;