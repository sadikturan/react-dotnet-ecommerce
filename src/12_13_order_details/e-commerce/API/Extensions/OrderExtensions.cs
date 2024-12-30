using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Entity;

namespace API.Extensions
{
    public static class OrderExtensions
    {
        public static IQueryable<OrderDTO> OrderToDTO(this IQueryable<Order> query)
        {
            return query.Select(i => new OrderDTO
            {
                Id = i.Id,
                CustomerId = i.CustomerId,
                FirstName = i.FirstName,
                LastName = i.LastName,
                Phone = i.Phone,
                AddresLine = i.AddresLine,
                City = i.City,
                DeliveryFree = i.DeliveryFree,
                SubTotal = i.SubTotal,
                OrderDate = i.OrderDate,
                OrderStatus = i.OrderStatus,
                OrderItems = i.OrderItems.Select(item => new OrderItemDTO
                {
                    Id = item.Id,
                    ProductName = item.ProductName,
                    ProductId = item.ProductId,
                    ProductImage = item.ProductImage,
                    Price = item.Price,
                    Quantity = item.Quantity
                }).ToList()
            });
        }
    }
}