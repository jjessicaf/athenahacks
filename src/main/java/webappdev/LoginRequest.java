package webappdev;

public class LoginRequest
{
    private String username;
    private String password;

    private int fails;

    public String getUsername() {
        return username;
    }

    public void setUsername(String p) {
        username = p;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String p) {
        password = p;
    }

    public int getFails() { return fails; }

    public void setFails(int n) { fails = n; }
}
