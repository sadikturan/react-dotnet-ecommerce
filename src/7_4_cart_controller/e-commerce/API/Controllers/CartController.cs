using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class CartController : ControllerBase
{
    private readonly DataContext _context;
    public CartController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<Cart>> GetCart()
    {
        var cart = await _context.Carts
                    .Include(i => i.CartItems)
                    .ThenInclude(i => i.Product)
                    .Where(i => i.CustomerId == Request.Cookies["customerId"])
                    .FirstOrDefaultAsync();

        if (cart == null)
            return NotFound();

        return cart;
    }
}