using System.ComponentModel.DataAnnotations;

namespace API.DTO;

public class LoginDTO
{
    [Required]
    public string UserName { get; set; } = null!;

    [Required]
    public string Password { get; set; } = null!;
}