# Stage 1: Frontend build
FROM node:20 AS client-build

ENV DOCKER=true
ENV NODE_ENV=production

WORKDIR /client

# Copy only package files first (for caching)
COPY raveresturant.client/package*.json ./
RUN npm install --include=dev

# Copy rest of frontend
COPY raveresturant.client .
RUN npm run build


# Stage 2: Backend build
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /app

# Copy only backend project files
COPY RaveResturant.Server ./RaveResturant.Server

# Copy solution file if exists
COPY *.sln ./

# Copy frontend build output
COPY --from=client-build /client/dist ./RaveResturant.Server/wwwroot

RUN dotnet publish RaveResturant.Server/RaveResturant.Server.csproj -c Release -o out


# Stage 3: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0

WORKDIR /app
COPY --from=build /app/out .

ENV ASPNETCORE_URLS=http://+:$PORT

CMD ["dotnet", "RaveResturant.Server.dll"]