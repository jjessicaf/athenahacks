package webappdev;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    private int numFailed = 0;

    @GetMapping("/loginapi")
    public String login(@RequestParam(value="username", defaultValue = "") String username, @RequestParam(value="password", defaultValue = "") String password) {
        if (username.equals("Tommy") && password.equals("Trojan")) {
            return "Login Successful";
        }

        return "Login Unsuccessful";
    }

    @PostMapping("/loginapi")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        if (request.getFails() == 0) {
            numFailed = 0;
        }
        LoginResponse response = new LoginResponse();
        if (request.getUsername().equals("Tommy") && request.getPassword().equals("Trojan")) { // success case
            response.setData("Login Successful");
            return ResponseEntity.ok().body(response);
        }
        else if (numFailed == 1) {
            response.setData("Login Unsuccessful, one more attempt to log in allowed");
        }
        else if (request.getUsername().equals("Tommy") && request.getPassword().equals("Bruin")) {
            response.setData("Login Unsuccessful");
        }
        else if (request.getUsername().isEmpty() && request.getPassword().isEmpty()) {
            response.setData("Login Unsuccessful, username and password required");
        }
        else if (request.getUsername().equals("Tommy") && request.getPassword().isEmpty()) {
            response.setData("Login Unsuccessful, password required");
        }
        else if (request.getUsername().isEmpty() && request.getPassword().equals("Trojan")) {
            response.setData("Login Unsuccessful, username required");
        }

        numFailed += 1;
        response.setFails(numFailed);

        return ResponseEntity.ok().body(response);
    }
}
