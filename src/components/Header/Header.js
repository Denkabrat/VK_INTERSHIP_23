import './Header.scss';

const Header = () => {

//Пустой компонент для отрисовки хедера
//Ничего кроме верстки

    return(
      <div className='Header'>
        <div className="Header_Wrapper">
            <a href="https://vk.com"><img className='Header_Logo' src='../../images/vkIcon.png' alt="VKLogo" /></a>
            <h3 className='Booking_Title'>Бронирование переговорной</h3>
        </div>
     </div>
    )
}

export default Header;