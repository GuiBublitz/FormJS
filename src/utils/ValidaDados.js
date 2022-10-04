class ValidaDados{

    static validaNome(nome){
        if(nome.length > 0 && isNaN(nome)) { console.log('Nome é válido!'); return true};
        console.log('Nome não é válido');
        return false;
    }

    static validaEmail(email){ /*LINK : https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427*/ 
        let usuario = email.substring(0, email.indexOf("@"));
        let dominio = email.substring(email.indexOf("@")+ 1, email.length);
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            console.log('email é válido');
            return true;
        }
        console.log('email não é válido');
        return false;
    }
    static validaCpf(strCPF){ /*LINK : https://www.devmedia.com.br/validar-cpf-com-javascript/23916*/ 
        if (strCPF.length > 11) { console.log('cpf não é válido!'); return false };
        let soma;
        let resto;
        soma = 0;
        if (strCPF == "00000000000") { console.log('cpf não é válido!'); return false };
        for (let i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(strCPF.substring(9, 10)) ) { console.log('cpf não é válido!'); return false };
        soma = 0;
        for (let i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(strCPF.substring(10, 11) ) ){ console.log('cpf não é válido!'); return false; }
        console.log('cpf é válido!');
        return true;
    }

    static validaCnpj(strCnpj){
        let cnpj = strCnpj.replace(/[^\d]+/g,'');
        if(cnpj == '') { console.log('cnpj não é válido'); return false };
        if (cnpj.length != 14){ console.log('cnpj não é válido'); return false };
        if (cnpj == "00000000000000" || 
            cnpj == "11111111111111" || 
            cnpj == "22222222222222" || 
            cnpj == "33333333333333" || 
            cnpj == "44444444444444" || 
            cnpj == "55555555555555" || 
            cnpj == "66666666666666" || 
            cnpj == "77777777777777" || 
            cnpj == "88888888888888" || 
            cnpj == "99999999999999")
            { console.log('cnpj não é válido'); return false; }
        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0,tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) { console.log('cnpj não é válido'); return false };
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)) { console.log('cnpj não é válido'); return false }; 
        console.log('cnpj é válido');
        return true;
    }

    static validaTelefone(telefone){
        telefone = telefone.replace(/\D/g, '');
        if (!(telefone.length >= 10 && telefone.length <= 11)){ console.log('Telefone não é válido!'); return false };
        if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9){ console.log('Telefone não é válido!'); return false };
        for (var n = 0; n < 10; n++) {
            if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) { console.log('Telefone não é válido!'); return false };
        }
        var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
            21, 22, 24, 27, 28, 31, 32, 33, 34,
            35, 37, 38, 41, 42, 43, 44, 45, 46,
            47, 48, 49, 51, 53, 54, 55, 61, 62,
            64, 63, 65, 66, 67, 68, 69, 71, 73,
            74, 75, 77, 79, 81, 82, 83, 84, 85,
            86, 87, 88, 89, 91, 92, 93, 94, 95,
            96, 97, 98, 99];
        if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) { console.log('Telefone não é válido!'); return false };
        if (new Date().getFullYear() < 2017) { console.log('Telefone não é válido!'); return true };
        if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) { return false };
        console.log('Telefone é válido!');
        return true;
    }

}