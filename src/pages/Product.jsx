import React from 'react';
import { Plus, Layers, Package, ClipboardList, Sparkles, Store } from 'lucide-react';

const statusStyles = {
  active: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  draft: 'bg-amber-50 text-amber-700 border border-amber-100',
  hidden: 'bg-gray-100 text-gray-700 border border-gray-200',
  banned: 'bg-rose-50 text-rose-700 border border-rose-100',
};

const Product = () => {
  const products = [];
  const categories = [];
  const variantMatrix = [];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-900 text-white grid place-items-center">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total products</p>
              <p className="text-xl font-semibold text-gray-900">N/A</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Categories</p>
              <p className="text-xl font-semibold text-gray-900">N/A</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Featured products</p>
              <p className="text-xl font-semibold text-gray-900">N/A</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div>
            <p className="text-sm text-gray-500">Products</p>
            <p className="text-lg font-semibold text-gray-900">Manage products and categories</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg hover:bg-gray-50">
              <Plus className="w-4 h-4" />
              Add product
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg hover:bg-gray-50">
              <Layers className="w-4 h-4" />
              Add category
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-700 text-xs uppercase border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Product</th>
                <th className="px-4 py-3 text-left font-semibold">SKU</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold">Stock</th>
                <th className="px-4 py-3 text-left font-semibold">Variants</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-4 py-6 text-center text-sm text-gray-600">
                    No products yet.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{product.name}</td>
                    <td className="px-4 py-3 text-gray-700">{product.sku}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{product.price}</td>
                    <td className="px-4 py-3 text-gray-700">{product.stock}</td>
                    <td className="px-4 py-3 text-gray-700">{product.variants}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full ${statusStyles[product.status]}`}>
                        {product.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-500">Categories</p>
              <p className="font-semibold text-gray-900">Manage categories</p>
            </div>
            <button className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-gray-700 border rounded-lg hover:bg-gray-50">
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="space-y-2">
            {categories.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                No categories yet.
              </div>
            ) : (
              categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2">
                  <span className="font-semibold text-gray-900">{category.name}</span>
                  <span className="text-sm text-gray-600">{category.count} products</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-500">SKU & stock</p>
              <p className="font-semibold text-gray-900">Manage stock</p>
            </div>
            <button className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-gray-700 border rounded-lg hover:bg-gray-50">
              <ClipboardList className="w-4 h-4" />
              Update stock
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase border-b border-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">SKU</th>
                  <th className="px-3 py-2 text-left font-semibold">Attributes</th>
                  <th className="px-3 py-2 text-left font-semibold">Stock</th>
                  <th className="px-3 py-2 text-left font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {variantMatrix.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-3 py-4 text-center text-sm text-gray-600">
                      No SKU/variant yet.
                    </td>
                  </tr>
                ) : (
                  variantMatrix.map((item) => (
                    <tr key={item.sku} className="border-b border-gray-100">
                      <td className="px-3 py-2 font-semibold text-gray-900">{item.sku}</td>
                      <td className="px-3 py-2 text-gray-700">{item.attrs}</td>
                      <td className="px-3 py-2 text-gray-700">{item.stock}</td>
                      <td className="px-3 py-2 font-semibold text-gray-900">{item.price}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-gray-500">Shop highlight</p>
            <p className="font-semibold text-gray-900">Connect to shop / seller</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 border rounded-lg hover:bg-gray-50">
            <Store className="w-4 h-4" />
            Edit shop
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border border-gray-100 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Product images</p>
            <p className="text-sm font-semibold text-gray-900">Upload and pick main image</p>
          </div>
          <div className="border border-gray-100 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Attributes</p>
            <p className="text-sm font-semibold text-gray-900">Create variants</p>
          </div>
          <div className="border border-gray-100 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Attribute values</p>
            <p className="text-sm font-semibold text-gray-900">Add options</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
