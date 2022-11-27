const esqueceuSenha = document.getElementById("modalToggle")
const fecharModal = document.getElementById('modalToggleX')

esqueceuSenha.addEventListener('click', function(){
    document.querySelector('.containerModal').classList.toggle('show-modal')
})

fecharModal.addEventListener('click', function(){
    document.querySelector('.containerModal').classList.toggle('show-modal')
})