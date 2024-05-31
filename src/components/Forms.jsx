function Forms(){
    return(
        <div className="w-screen flex flex-col justify-center items-center font-Archivo max-md:h-screen animate__animated animate__fadeIn animate__slower">
            <div>
            <p className="text-xl font-light max-md-title ">Bem Vindo de volta</p>
            <p className="font-semibold text-4xl mb-10 max-md-subtitle">Faça login na sua conta</p>
            <p className="text-lg mb-3 max-md-label">E-mail</p>
            <input type="email" className="bg-gray-100 border border-gray-200 rounded w-80 h-pageH w-pageW max-md-input pl-2" placeholder="exemplo@gmail.com"/>
            <p className="mt-8 mb-3 max-md-label">Senha</p>
            <input type="password" className="bg-gray-100 border border-gray-200 rounded w-80 h-pageH w-pageW max-md-input pl-2" placeholder="0123456789"/>
            <br/>
            <div className="flex mt-6 justify-center max-md-check">
            <input type="radio" className="mr-2" />Lembre de mim
            <a href="#" className="ml-10 font-semibold text-greenPage">Esquceu sua senha ?</a>
            </div>
            <div className="flex flex-col mt-14">
            <button className="bg-greenPage rounded text-white font-semibold w-pageW h-12 mb-6 max-md-button">Entrar na conta</button>
            <button className="bg-black rounded text-white font-semibold w-pageW h-12 flex justify-center items-center max-md-button"><img src="./src/img/icon.png" alt="" className="mr-2"/>Ou faça login com o Google</button>
            </div>
            <div className="mt-16 flex justify-center max-md-footer">
            <p>Não tem uma conta? </p>
            <a href="" className="font-semibold ml-2 text-greenPage">Cadastre-se</a>
            </div>
            
            </div>
            
        </div>
    )
}
export default Forms