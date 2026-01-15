from django import template

register = template.Library()

@register.filter(name="indict")
def indict(value, arg):
    return str(arg) in value