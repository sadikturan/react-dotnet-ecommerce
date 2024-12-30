using System.ComponentModel.DataAnnotations;

namespace API.DTO;

public class UserDTO
{
    public string Name { get; set; } = null!;
    public string Token { get; set; } = null!;
}