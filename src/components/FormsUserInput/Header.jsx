import logo from './logo.jpg';
export default function Header (){
    return (
       <header className='head1'>
          <img src={logo} alt='A form and a pencil'className='headimg'/>
          <h1 className='head2'>RASIKA USER LOGIN</h1>
       </header>
    );
}