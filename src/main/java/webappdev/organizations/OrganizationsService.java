package webappdev.organizations;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import org.springframework.stereotype.Service;


@Service
public class OrganizationsService {

    private final OrganizationsRepository organizationsRepository;

    @Autowired
    public OrganizationsService(OrganizationsRepository organizationsRepository) {
        this.organizationsRepository = organizationsRepository;
    }

    public List<Organizations> getOrganizations() {
        return organizationsRepository.findAll();
    }

    public Organizations getOrganizationById(Long id) {
        Optional<Organizations> organization = organizationsRepository.findById(id);
        return organization.orElse(null);
    }

    public Organizations getOrganizationByName(String name) {
        Optional<Organizations> organization = organizationsRepository.findOrganizationByName(name);
        return organization.orElse(null);
    }

    public List<Organizations> getOrganizationsByUserId(Long userId) {
        return organizationsRepository.findOrganizationsByUserId(userId);
    }

    public boolean saveOrganization(Organizations organization) {
        if (organization == null) {
            return false;
        }
        organizationsRepository.save(organization);
        return true;
    }

    public boolean deleteOrganizationById(Long id) {
        if (id == null) {
            return false;
        }
        organizationsRepository.deleteById(id);
        return true;
    }

    public boolean organizationExistsByName(String name) {
        return organizationsRepository.existsByName(name);
    }

    public boolean deleteOrganizationByUserId(Long userId) {
        if (userId == null) {
            return  false;
        }
        organizationsRepository.deleteOrganizationsByUserId(userId);
        return true;
    }
}