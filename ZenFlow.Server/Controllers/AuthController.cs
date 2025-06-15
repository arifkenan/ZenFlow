using Microsoft.AspNetCore.Mvc;

namespace ZenFlow.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private static readonly Dictionary<string, string> _users = new();

        [HttpPost("signup")]
        public IActionResult Signup([FromBody] LoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest("Username and password are required.");
            }

            if (_users.ContainsKey(request.Username))
            {
                return Conflict("User already exists.");
            }

            _users[request.Username] = request.Password;
            return Ok();
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (_users.TryGetValue(request.Username, out var password) && password == request.Password)
            {
                return Ok();
            }

            return Unauthorized();
        }
    }

    public record LoginRequest(string Username, string Password);
}
