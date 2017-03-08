/*
4. Dynamiczne tworzenie elementów
Stwórz aplikację, która zawierać będzie prosty formularz z wyłącznie jednym polem
<input>, a także przyciskiem <button>. Napisz kod tak, aby po wpisaniu informacji do pola
i po wciśnięciu przycisku, wstawić wpisane informacje do nowego elementu <li>, a ten
element do wcześniej wstawionego elementu <ul>. W ten sposób, za każdym razem, gdy
zostanie wpisane np. jakieś imię, pojawi się ono na stronie. Dodatkowo możesz (nie
musisz) zadbać o to, by jeśli nic nie zostało wpisane do pola, nie wstawiać na stronę
pustego elementu <li>
*/


(function($) {

    $(document).ready(function() {

        var form = $(".form--add-name"),
            name = form.find("input#name"),
            list = $("<ul></ul>");

        list.insertAfter(form);

        function isValid(name){
            var text = name.val()            
            if (text === ""){
                name.addClass("invalid");
                return false;
            }
            else{
                name.removeClass("invalid");
                return true;
            }
        }


        form.on('submit', function(e){
            e.preventDefault();
            var text = name.val();
            if (isValid(name) === true){
                list.append($("<li></li>").text(text));
                name.val("");
            }
        })
    })

})(jQuery)