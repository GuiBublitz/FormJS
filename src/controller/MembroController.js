class MembroController{

    constructor(){
        this._form      = document.querySelector('.form');
        this._btnSubmit = document.querySelector('.form button');
        this._obj = this.getFormData(this._form); // Guarda todos os elementos do form
        this.initEvents();
    }
    initEvents(){
        document.addEventListener("DOMContentLoaded", function(event) {
            let optionPlaceholder = document.createElement('option');
            optionPlaceholder.setAttribute('value','');
            optionPlaceholder.setAttribute('disabled','disabled');
            optionPlaceholder.setAttribute('selected','selected');
            optionPlaceholder.setAttribute('hidden','hidden');
            optionPlaceholder.innerHTML = "Selecione a cidade";
            let optionPlaceholder2 = optionPlaceholder.cloneNode(true);
            document.querySelector('#cidade-user').appendChild(optionPlaceholder);
            document.querySelector('#cidade-atuacao').appendChild(optionPlaceholder2);
        });

        this._btnSubmit.addEventListener('click',(e)=>{
            e.preventDefault();
            let obj = this.getFormData(this._form);
            if(this.validaUserData(obj)){
                this._form.submit();
            };
        });

        this._form.querySelector('#estado-user').addEventListener('change',(e)=>{
            this._form.querySelector('#cidade-user').innerHTML = '';
            selectData.estados.forEach((estado, indexEstado)=>{
                if(estado.sigla == this._form.querySelector('#estado-user').value){
                    estado.cidades.forEach((cidade, indexCidade)=>{
                        let option = document.createElement('option');
                        option.setAttribute('value', cidade);
                        option.innerHTML = cidade;
                        this._form.querySelector('#cidade-user').appendChild(option);
                    });
                }
            });

        });

        this._form.querySelector('#estado-atuacao').addEventListener('change',(e)=>{
            this._form.querySelector('#cidade-atuacao').innerHTML = '';
            selectData.estados.forEach((estado, indexEstado)=>{
                if(estado.sigla == this._form.querySelector('#estado-atuacao').value){
                    estado.cidades.forEach((cidade, indexCidade)=>{
                        let option = document.createElement('option');
                        option.setAttribute('value', cidade);
                        option.innerHTML = cidade;
                        this._form.querySelector('#cidade-atuacao').appendChild(option);
                    });
                }
            });

        });

        console.log(this._obj);
        for(let key in this._obj){
            switch(key){
                case 'email'         :
                case 'cpfCnpj'       :
                case 'nome'          :
                case 'tel'           :
                case 'core'          :
                case 'cidade-user'   :
                case 'cidade-atuacao':
                    this._obj[key][1].addEventListener('click',()=>{
                        this._obj[key][1].previousElementSibling.style.color = '#2F2F2F';
                        this._obj[key][1].style.borderBottom = "1px solid #2F2F2F";
                    });
                    break;
                case 'estado-user'   :
                    this._obj[key][1].addEventListener('click',()=>{
                        this._obj[key][1].previousElementSibling.style.color = '#2F2F2F';
                        this._obj[key][1].style.borderBottom = "1px solid #2F2F2F";
                        this._obj['cidade-user'][1].previousElementSibling.style.color = '#2F2F2F';
                        this._obj['cidade-user'][1].style.borderBottom = "1px solid #2F2F2F";
                    });
                    break;
                case 'estado-atuacao':
                    this._obj[key][1].addEventListener('click',()=>{
                        this._obj[key][1].previousElementSibling.style.color = '#2F2F2F';
                        this._obj[key][1].style.borderBottom = "1px solid #2F2F2F";
                        this._obj['cidade-atuacao'][1].previousElementSibling.style.color = '#2F2F2F';
                        this._obj['cidade-atuacao'][1].style.borderBottom = "1px solid #2F2F2F";
                    });
                    break;
                default:

                    break;
            }

        }

    }

    validaUserData(data){
        data.email[2]   = ValidaDados.validaEmail(data.email[0]);
        data.cpfCnpj[2] = (ValidaDados.validaCnpj(data.cpfCnpj[0]) || ValidaDados.validaCpf(data.cpfCnpj[0].replaceAll('.','').replaceAll('-','')));
        data.nome[2]    = ValidaDados.validaNome(data.nome[0]);
        data.tel[2]     = ValidaDados.validaTelefone(data.tel[0]);
        this.atualizaTela(data);
    }

    getFormData(form){
        let obj = {};
        [...form.elements].forEach((item, index)=>{
            obj[item.name] = [item.value, item];
        });
        return obj;
    }

    atualizaTela(obj){
        var executed = false;
        for(let key in obj){
            switch (key) {
                case 'email'  :
                case 'cpfCnpj':
                case 'nome'   :
                case 'tel'    :
                    if (obj[key][2] == false){
                        obj[key][1].previousElementSibling.style.color = 'red';
                        obj[key][1].style.borderBottom = "1px solid red";
                        if (!executed) {
                            executed = true;
                            obj[key][1].parentElement.scrollIntoView();
                        }
                    } else {
                        obj[key][1].previousElementSibling.style.color = '#2F2F2F';
                        obj[key][1].style.borderBottom = "1px solid #2F2F2F";
                    }
                    break;
                default:
                    if(obj[key][0] == false && key != "" && key != "mensagem"){
                        obj[key][1].previousElementSibling.style.color = 'red';
                        obj[key][1].style.borderBottom = "1px solid red";
                        if (!executed) {
                            executed = true;
                            obj[key][1].parentElement.scrollIntoView();
                        }
                    } else {
                        obj[key][1].previousElementSibling.style.color = '#2F2F2F';
                        obj[key][1].style.borderBottom = "1px solid #2F2F2F";
                    }
                    break;
            }
        }
    }

}
