import './home.css'

function Home (){
    return(
        <div className="fotos">
            <h2 className='titulo'>Bem-vindo a Página Inicial da nossa AV2</h2>
            <p className='sub-titulo'>Conheça os melhores Cosplays do SESI/SENAI</p>
            
            <img className='foto1'src={require('./FOTO3.jpg')} alt='povo da turma da monica' />
            <img className='foto2'src={require('./FOTO6.jpg')} alt='foveiras e o teacher'/>
            <img className='foto3'src={require('./FOTO7.jpg')} alt= 'As operadoras TIM e claro+'/>
            <img className='foto4'src={require('./FOTO5.jpg')} />
            <img className='foto5'src={require('./FOTO4.jpg')} />
            <img className='foto6' src={require('./HOME.jpg')} />
         </div>
    )
}

export default Home;