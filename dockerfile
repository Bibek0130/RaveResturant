FROM node:20 AS client-build
WORKDIR /client
COPY raveresturant.client .
RUN npm install && npm run build

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY . .

# copy React build into wwwroot
COPY --from=client-build /client/dist ./raveresturant.server/wwwroot

RUN dotnet publish raveresturant.server/raveresturant.server.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .

ENV ASPNETCORE_URLS=http://+:$PORT
CMD ["dotnet", "raveresturant.server.dll"]