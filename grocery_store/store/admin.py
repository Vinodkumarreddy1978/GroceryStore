from django.contrib import admin
from .models import Category, Product, Cart, CartItem, Order, OrderItem

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'stock', 'available')
    list_filter = ('available', 'category')
    search_fields = ('name', 'description')
    list_editable = ('price', 'stock', 'available')

class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 0

class CartAdmin(admin.ModelAdmin):
    list_display = ('user',)
    inlines = [CartItemInline]

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0

class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at', 'total_price', 'status')
    list_filter = ('status', 'created_at')
    inlines = [OrderItemInline]

# Register your models with the admin site
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
