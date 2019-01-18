(function(){
    var Button = document.querySelector('#Button')
    var Checkbox = document.querySelector('#Checkbox')

    Button.disabled = true
    
    Checkbox.addEventListener('change', function(){
        Button.disabled = !this.checked
    })
})()