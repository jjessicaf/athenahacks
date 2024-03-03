package webappdev.organizations;

import jakarta.persistence.*;
import webappdev.login.User;

@Entity
@Table(name = "organizations")
public class Organizations {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "url")
    private String url;

    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB")
    private byte[] image;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    // Constructors, getters, and setters

    public Organizations() {
    }

    public Organizations(String name, String url, byte[] image, Long userId) {
        this.name = name;
        this.url = url;
        this.image = image;
        setUid(userId);
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Long getUid() {
        return (user != null) ? user.getId() : -1;
    }

    public void setUid(Long uid) {
        if (user == null) {
            user = new User();
        }
        user.setId(uid);
    }

    @Override
    public String toString() {
        return "Organization{" +
                "id=" + id +
                ", name='" + name +
                ", url='" + url +
                ", uid='" + getUid() +
                '}';
    }
}