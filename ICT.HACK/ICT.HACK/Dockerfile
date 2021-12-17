#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ICT.HACK/ICT.HACK.csproj", "ICT.HACK/"]
RUN dotnet restore "ICT.HACK/ICT.HACK.csproj"
COPY . .
WORKDIR "/src/ICT.HACK"
RUN dotnet build "ICT.HACK.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ICT.HACK.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ICT.HACK.dll"]