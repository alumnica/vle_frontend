// for testing purposes only
$(document).ready(function () {
   
    $('#test-end').on('click', function(e){
        
        var testAnswers = [];
        $('#test-form li').each(function(){
           var liIndex = $('#test-form li').index(this);
           var answer = $("input:checked", this).val();
            testAnswers.splice(liIndex,1,answer);
        });
        $('#test-answers').val(testAnswers);
    });
});