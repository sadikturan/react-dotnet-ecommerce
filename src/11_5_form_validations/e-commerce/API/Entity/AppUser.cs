using Microsoft.AspNetCore.Identity;

namespace API.Entity;

public class AppUser : IdentityUser
{
    public string? Name { get; set; }
}