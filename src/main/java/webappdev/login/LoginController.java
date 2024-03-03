package webappdev.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService=loginService;
    }

    //@CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/users") //GET
    @ResponseBody
    public List<User> getUsers() {
        return loginService.getUser();
    }

    // Retrieves a list of saved recipes for a specific user based on the provided userId
    //@CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/user/{uid}")
    @ResponseBody
    public User getUserById(@PathVariable Long uid) {
        return loginService.findUserById(uid);
    }
//
//    @CrossOrigin(origins = "http://localhost:8080")
//    @DeleteMapping("/recipes/{id}")
//    public void deleteUser(@PathVariable("userId") Long userId) {
//        loginService.deleteUserInfo(userId);
//    }
//
//    @CrossOrigin(origins = "http://localhost:8080")
//    @PutMapping("/organization/{id}")
//    public void updateUser(
//            @PathVariable("userId") Long userId,
//            @RequestParam(required = false) String userName,
//            @RequestParam(required = false) String email) {
//        loginService.updateUserInfo(userId, userName, email);
//    }

    // Checks if the user with the username AND password matches the one in database
    //@CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<Boolean> login(@RequestParam String username, @RequestParam String password) {
        try {
            // Fetch user from database based on username
            User user2 = loginService.findUserByUsername(username);

            if (user2 != null && user2.getPassword().equals(password)) {
                // Username and password match
                return ResponseEntity.ok(true);
            } else {
                // Username and password don't match or user not found
                return ResponseEntity.ok(false);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(false);
        }
    }

    // Registers new user
    @PostMapping("/register")
    public ResponseEntity<?> registerNewUser(@RequestBody LoginRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();

        if (username == null || password == null) {
            return ResponseEntity.badRequest().body("Invalid request body");
        }

        User newUser = new User(username, password); // Assuming User is your entity class
        boolean userAdded = loginService.addNewUser(newUser);
        LoginResponse response = new LoginResponse();
        if (userAdded) {
            response.setData("User registered successfully");
            return ResponseEntity.ok().body(response);
        } else {
            response.setData("Username already taken");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }

    @GetMapping("/test")
    public String test(@RequestParam(value="username", defaultValue = "") String username, @RequestParam(value="password", defaultValue = "") String password) {
        if (username.equals("Tommy") && password.equals("Trojan")) {
            return "Login Successful";
        }

        return "Login Unsuccessful";
    }

    @PostMapping("/login/test")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();

        if (request.getUsername().equals("Tommy") && request.getPassword().equals("Trojan")) { // success case
            response.setData("Login Successful");
            return ResponseEntity.ok().body(response);
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

        return ResponseEntity.ok().body(response);
    }
}
