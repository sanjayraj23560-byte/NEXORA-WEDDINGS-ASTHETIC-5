$destDir = "d:\wedding-webcollab\images"

$missing = @(
    @{ url = "https://images.unsplash.com/photo-1583939000155-2d8ebf035cd5?w=300&h=300&fit=crop"; name = "cat-hindu.jpg" },
    @{ url = "https://images.unsplash.com/photo-1549416878-b9ca95e1bb49?w=600&h=400&fit=crop"; name = "blog-celebrity.jpg" },
    @{ url = "https://images.unsplash.com/photo-1605370425313-03e5cbb32fb9?w=600&h=400&fit=crop"; name = "blog-wedding-favours.jpg" }
)

foreach ($img in $missing) {
    $dest = Join-Path $destDir $img.name
    Write-Host "Downloading $($img.name)..."
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $dest -UseBasicParsing -Headers @{ "User-Agent" = "Mozilla/5.0" }
        $size = (Get-Item $dest).Length
        Write-Host "  OK: $($img.name) - $size bytes"
    } catch {
        Write-Host "  FAILED: $($img.name)"
    }
}
Write-Host "All done!"
