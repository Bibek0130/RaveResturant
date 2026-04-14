ENV DOCKER=true
ENV NODE_ENV=production
FROM node:20 AS client-build
WORKDIR /client
COPY raveresturant.client .
RUN npm install && npm run build

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /app
COPY . .

# copy React build into wwwroot
COPY --from=client-build /client/dist ./RaveResturant.Server/wwwroot

RUN dotnet publish RaveResturant.Server/RaveResturant.Server.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=build /app/out .

ENV ASPNETCORE_URLS=http://+:$PORT
CMD ["dotnet", "RaveResturant.Server.dll"]