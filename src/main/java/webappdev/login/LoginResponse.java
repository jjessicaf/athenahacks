package webappdev.login;

public class LoginResponse {
    private String data;
    private Long id;

    public String getData() {
        return data;
    }

    public void setData(String d) {
        data = d;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
