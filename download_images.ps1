
$images = @(
    @{ url = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"; name = "event-hero.jpg" },
    @{ url = "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=300&h=300&fit=crop"; name = "cat-latest.jpg" },
    @{ url = "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop"; name = "cat-bridal-fashion.jpg" },
    @{ url = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=300&fit=crop"; name = "cat-planning.jpg" },
    @{ url = "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=300&fit=crop"; name = "cat-celebrity.jpg" },
    @{ url = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=300&fit=crop"; name = "cat-decor.jpg" },
    @{ url = "https://images.unsplash.com/photo-1583939000155-2d8ebf035cd5?w=300&h=300&fit=crop"; name = "cat-hindu.jpg" },
    @{ url = "https://images.unsplash.com/photo-1610173827002-62c0f0e047ed?w=300&h=300&fit=crop"; name = "cat-jewellery.jpg" },
    @{ url = "https://images.unsplash.com/photo-1549416878-b9ca95e1bb49?w=600&h=400&fit=crop"; name = "blog-celebrity.jpg" },
    @{ url = "https://images.unsplash.com/photo-1605370425313-03e5cbb32fb9?w=600&h=400&fit=crop"; name = "blog-wedding-favours.jpg" },
    @{ url = "https://images.unsplash.com/photo-1621252179027-94459d278660?w=600&h=400&fit=crop"; name = "blog-bridal-fashion.jpg" },
    @{ url = "https://images.unsplash.com/photo-1582294157451-f7ea44e50257?w=400&h=300&fit=crop"; name = "blog-jewellery.jpg" },
    @{ url = "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop"; name = "blog-wedding-planning.jpg" },
    @{ url = "https://images.unsplash.com/photo-1594950669273-518357f88eb2?w=400&h=300&fit=crop"; name = "blog-accessories.jpg" },
    @{ url = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop"; name = "blog-decorating.jpg" }
)

$destDir = "d:\wedding-webcollab\images"

foreach ($img in $images) {
    $dest = Join-Path $destDir $img.name
    Write-Host "Downloading $($img.name)..."
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $dest -UseBasicParsing -Headers @{ "User-Agent" = "Mozilla/5.0" }
        Write-Host "  OK: $($img.name)"
    } catch {
        Write-Host "  FAILED: $($img.name) - $_"
    }
}

Write-Host "Done!"
