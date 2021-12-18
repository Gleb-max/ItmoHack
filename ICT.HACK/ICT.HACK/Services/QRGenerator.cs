using ICT.HACK.Services.Abstractions;
using QRCoder;

namespace ICT.HACK.Services
{
    public class QRGenerator : IQRGenerator
    {
        public async Task SaveQRAsync(string path, string data)
        {
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(data, QRCodeGenerator.ECCLevel.Q);
            PngByteQRCode qrCode = new PngByteQRCode(qrCodeData);
            byte[] qrBuffer = qrCode.GetGraphic(20);
            using(FileStream qrImage = new FileStream(path, FileMode.Create))
            {
                await qrImage.WriteAsync(qrBuffer);
            }
        }
    }
}
