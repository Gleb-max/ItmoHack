namespace ICT.HACK.Services.Abstractions
{
    public interface IQRGenerator
    {
        public Task SaveQRAsync(string path, string data);
    }
}
