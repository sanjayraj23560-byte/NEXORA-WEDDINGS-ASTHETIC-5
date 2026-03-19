
$imgs = @(
    @{url='https://images.unsplash.com/photo-1549416878-b9ca95e1bb49?w=600&h=400&fit=crop'; name='blog-celebrity.jpg'},
    @{url='https://images.unsplash.com/photo-1605370425313-03e5cbb32fb9?w=600&h=400&fit=crop'; name='blog-wedding-favours.jpg'},
    @{url='https://images.unsplash.com/photo-1582294157451-f7ea44e50257?w=400&h=300&fit=crop'; name='blog-jewellery.jpg'},
    @{url='https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop'; name='blog-wedding-planning.jpg'},
    @{url='https://images.unsplash.com/photo-1594950669273-518357f88eb2?w=400&h=300&fit=crop'; name='blog-accessories.jpg'},
    @{url='https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop'; name='blog-decorating.jpg'},
    @{url='https://images.unsplash.com/photo-1583939000155-2d8ebf035cd5?w=300&h=300&fit=crop'; name='cat-hindu.jpg'},
    @{url='https://images.unsplash.com/photo-1610173827002-62c0f0e047ed?w=300&h=300&fit=crop'; name='cat-jewellery.jpg'}
)
$dir = 'd:\wedding-webcollab\images'
foreach ($img in $imgs) {
    $dest = Join-Path $dir $img.name
    Write-Host "Downloading $($img.name)..."
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $dest -UseBasicParsing -Headers @{"User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
        $sz = (Get-Item $dest).Length
        Write-Host "  OK - $sz bytes"
    } catch {
        Write-Host "  FAIL: $_"
    }
}
Write-Host "Done"
