# Sessioner och JWT

## Övningar

Utgå från förra veckans övning (Where it's @) och gör om skapa konto och logga in så dessa använder sig
av `JSON web token`, `bcryptjs` samt `uuid`. Lösenordet ska krypteras när en användare skapas samt kopplas till ett genererat uuid som blir användarens användarid som sedan används. När användaren loggar in ska en JWT token signeras och skickas tillbaka med användarens id krypterat i den token.

Sedan ska de andra endpoints:en enbart vara nåbara med en giltlig token och denna kontroll ska ske i en middleware.

**Level 2**

Lägg till routes som gör att det går att lägga till och ta bort nya events. Dessa endpoints ska enbart vara nåbara om du har rollen admin.

**Level 3**

Gör en enklare frontend i React till ditt API där man kan skapa konto samt logga in. Den inloggade sidan ska enbart vara åtkomstbar ifall du har en giltlig token annars ska man skickas till inloggningssidan.