package webappdev.login;

public class LoginResponse {
    private String data;
    private int fails;

    public String getData() {
        return data;
    }

    public void setData(String d) {
        data = d;
    }

    public int getFails() { return fails; }

    public void setFails(int f) { fails = f; }
}
