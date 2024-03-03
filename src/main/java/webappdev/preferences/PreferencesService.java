package webappdev.preferences;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class PreferencesService {

    private final PreferencesRepository preferencesRepository;

    @Autowired
    public PreferencesService(PreferencesRepository preferencesRepository) {
        this.preferencesRepository = preferencesRepository;
    }

    public List<Preferences> getPreferences() {
        return preferencesRepository.findAll();
    }

    //idk what these do but they're operations a controller uses
    public Preferences getPreferencesById(Long id) {
        Optional<Preferences> savedRecipe = preferencesRepository.findById(id);
        return savedRecipe.orElse(null);
    }

    public List<Preferences> getPreferencesByUserId(Long uid) {
        return preferencesRepository.findByUserId(uid);
    }

    public List<Preferences> saveMultiple(List<String> causes, Long userId) {
        List<Preferences> preferences = new ArrayList<Preferences>();
        for (String c : causes) {
            Preferences p = new Preferences(c, userId);
            save(p);
            preferencesRepository.findById(p.getId()).ifPresent(preferences::add); // add if added
        }
        return preferences;
    }

    public Preferences save(Preferences p) {
        // Additional business logic/validation before saving if needed
        return preferencesRepository.save(p);
    }

    public void deletePreferencesById(Long id) {
        preferencesRepository.deleteById(id);
    }

}
